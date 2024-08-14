const currentDate = new Date();

function adj_date(number: number) {
  const current_copy = new Date(currentDate.valueOf());
  current_copy.setDate(current_copy.getDate() - number);
  return current_copy;
}
export const userlistings = [
  {
    post_datetime: adj_date(10).toString(),
    contact: {
      twitter_handle: "mytwitter",
      twitter_url: "google.com",
    },
    name: "bob",
    twitter_photo_url:
      "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
    description:
      "A description. Lorem ipsum dolor amit. I like pizza, pizza is good to eat. Please givem e more pizza",
    lease_preference: "A day",
    lease_timing: "soon",
    referrer_info: {
      name: "Hello",
      twitter_url: "google.com",
      twitter_photo_url:
        "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
    },
  },
  {
    post_datetime: adj_date(10).toString(),
    contact: {
      twitter_handle: "mytwitter",
      twitter_url: "google.com",
    },
    name: "bob",
    twitter_photo_url:
      "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
    description:
      "A description. Lorem ipsum dolor amit. I like pizza, pizza is good to eat. Please givem e more pizza",
    lease_preference: "A day",
    lease_timing: "soon",
    referrer_info: {
      name: "Hello",
      twitter_url: "google.com",
      twitter_photo_url:
        "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
    },
  },
  {
    post_datetime: adj_date(10).toString(),
    contact: {
      twitter_handle: "mytwitter",
      twitter_url: "google.com",
    },
    name: "bob",
    twitter_photo_url:
      "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
    description:
      "A description. Lorem ipsum dolor amit. I like pizza, pizza is good to eat. Please givem e more pizza",
    lease_preference: "A day",
    lease_timing: "soon",
    referrer_info: {
      name: "Hello",
      twitter_url: "google.com",
      twitter_photo_url:
        "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
    },
  },
  {
    post_datetime: adj_date(10).toString(),
    contact: {
      twitter_handle: "mytwitter",
      twitter_url: "google.com",
    },
    name: "bob",
    twitter_photo_url:
      "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
    description:
      "A description. Lorem ipsum dolor amit. I like pizza, pizza is good to eat. Please givem e more pizza",
    lease_preference: "A day",
    lease_timing: "soon",
    referrer_info: {
      name: "Hello",
      twitter_url: "google.com",
      twitter_photo_url:
        "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
    },
  },
  {
    post_datetime: adj_date(3).toString(),
    contact: {
      twitter_handle: "mytwitter",
      twitter_url: "google.com",
    },
    name: "bob",
    twitter_photo_url:
      "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
    description:
      "A description. Lorem ipsum dolor amit. I like pizza, pizza is good to eat. Please givem e more pizza",
    lease_preference: "A day",
    lease_timing: "soon",
    referrer_info: {
      name: "Hello",
      twitter_url: "google.com",
      twitter_photo_url:
        "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
    },
  },
  {
    post_datetime: "2000-01-10",
    contact: {
      twitter_handle: "mytwitter",
      twitter_url: "google.com",
    },
    name: "bob",
    twitter_photo_url:
      "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
    description:
      "A description. Lorem ipsum dolor amit. I like pizza, pizza is good to eat. Please givem e more pizza",
    lease_preference: "A day",
    lease_timing: "soon",
    referrer_info: {
      name: "Hello",
      twitter_url: "google.com",
      twitter_photo_url:
        "https://pbs.twimg.com/profile_images/1387824030602780673/CqiWzrma_400x400.jpg",
    },
  },
];
