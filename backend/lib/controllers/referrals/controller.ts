import express from 'express';
import client from '../../../prisma/client';

const router = express.Router();


// Generate/retrieve referral code for a user
router.get('/code/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await client.user.findUnique({
            where: { id: userId },
            select: { referralCode: true }
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ referralCode: user.referralCode });
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve referral code' });
    }
});

// Apply a referral code when a new user signs up
router.post('/apply', async (req, res) => {
    const { newUserId, referralCode } = req.body;
    try {
        const referrer = await client.user.findUnique({
            where: { referralCode }
        });
        if (!referrer) {
            return res.status(404).json({ error: 'Invalid referral code' });
        }

        await client.user.update({
            where: { id: newUserId },
            data: { referredById: referrer.id }
        });

        await client.referral.create({
            data: {
                referrerId: referrer.id,
                referredUser: newUserId,
            }
        });

        res.json({ message: 'Referral applied successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to apply referral' });
    }
});

// Track referral status
router.get('/status/:referralId', async (req, res) => {
    const { referralId } = req.params;
    try {
        const referral = await client.referral.findUnique({
            where: { id: referralId }
        });
        if (!referral) {
            return res.status(404).json({ error: 'Referral not found' });
        }
        res.json({ status: referral.status });
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve referral status' });
    }
});

export default router;
