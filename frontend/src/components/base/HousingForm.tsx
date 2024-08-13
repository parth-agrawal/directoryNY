import React, { useState } from 'react';

interface HousingFormProps {
    onClose: () => void;
}

const HousingForm: React.FC<HousingFormProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        housingInterest: '',
        lookingForRoommates: '',
        idealMoveInDate: '',
        idealMonthlyRent: '',
        typeOfProperty: '',
        additionalInfo: '',
        email: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic here
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
                <h2 className="text-2xl font-bold mb-4">Housing Request Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="firstName" className="block mb-2">First name</label>
                            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border rounded px-2 py-1" />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block mb-2">Last name</label>
                            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border rounded px-2 py-1" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block mb-2">Phone number *</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="w-full border rounded px-2 py-1" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="housingInterest" className="block mb-2">Housing Interest? *</label>
                        <select id="housingInterest" name="housingInterest" value={formData.housingInterest} onChange={handleChange} required className="w-full border rounded px-2 py-1">
                            <option value="">Please Select</option>
                            <option value="rent">Rent</option>
                            <option value="buy">Buy</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lookingForRoommates" className="block mb-2">Looking for roommates? *</label>
                        <select id="lookingForRoommates" name="lookingForRoommates" value={formData.lookingForRoommates} onChange={handleChange} required className="w-full border rounded px-2 py-1">
                            <option value="">Please Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="idealMoveInDate" className="block mb-2">Ideal Move In Date *</label>
                        <input type="date" id="idealMoveInDate" name="idealMoveInDate" value={formData.idealMoveInDate} onChange={handleChange} required className="w-full border rounded px-2 py-1" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="idealMonthlyRent" className="block mb-2">Ideal Monthly Rent</label>
                        <input type="number" id="idealMonthlyRent" name="idealMonthlyRent" value={formData.idealMonthlyRent} onChange={handleChange} className="w-full border rounded px-2 py-1" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="typeOfProperty" className="block mb-2">Type of Property</label>
                        <select id="typeOfProperty" name="typeOfProperty" value={formData.typeOfProperty} onChange={handleChange} className="w-full border rounded px-2 py-1">
                            <option value="">Please Select</option>
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                            <option value="condo">Condo</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="additionalInfo" className="block mb-2">Any other information that can help us serve you?</label>
                        <textarea id="additionalInfo" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} className="w-full border rounded px-2 py-1" rows={3}></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">Email *</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border rounded px-2 py-1" />
                    </div>
                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-200 rounded">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HousingForm;