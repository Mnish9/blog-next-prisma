export default {
	auth: {
		SIGNUP: "/auth/signup",
		LOGIN: "/auth/login",
		SEND_PDF_REPORT: "/auth/send-pdf-reports",
		VERIFY_OTP: "/auth/otp-verification",
		FORGET_PASSWORD: "/auth/forgot-password",
		RESEND_OTP: "/auth/resend-otp",
		RESET_PASSWORD: "/auth/reset-password",
		UPDATE_PROFILE: "/auth/update",
		GET_ATHLETE_COUNT: "/auth/get-athlete-count",
		GOOGLE_LOGIN: "/auth/google-login",
		LOGOUT: "/auth/logout",
	},
	user: {
		CHANGE_PASSWORD: "/user/change-password",
		GET_USER_DETAILS: "/user/get-user-details",
		ADD_UPDATE_PERSONAL_DETAILS: "/user/add-update-personal-details",
		ADD_UPDATE_MEDICAL_HISTORY: "/user/add-update-medical-history",
		UPDATE_USER_PROFILE_IMAGE: "/user/update-user-image",
		ADD_UPDATE_PHYSIQUE_AND_LIFESTYLE:
			"/user/add-update-physique-and-lifestyle",
		PRESIGNEDURL: "/user/pre-signed-url",
		UPLOAD_REPORTS: "/user/upload-reports",
		GET_REPORTS: "/user/get-user-reports",
		GET_USER_DR_REPORTS: "/user/get-user-dr-reports",
		DELETE_REPORTS: "/user/delete-reports",
		GET_ALL_BLOOD_REQUISITIONS: "/user/get-all-blood-requisitions",
	},
	stripe: {
		CREATE_PAYMENT_INTENT: "/stripe/create-payment-intent",
		CREATE_SINGLE_TIME_PAYMENT_INTENT:
			"stripe/create-single-time-payment-intent",
		UPDATE_PAYMENT: "/stripe/update-payment",
		UPDATE_BLOG_PAYMENT: "/stripe/update-blog-payment",
		CREATE_SUBSCRIPTION: "/stripe/create-subscription",
		CANCEL_SUBSCRIPTION: "/stripe/cancel-subscription",
		GET_BILLING_HISTORY: "/stripe/get-billing-history",
		GET_ACTIVE_SUBSCRIPTIONS: "/stripe/get-active-subscriptions",
	},
	plans: {
		GET_SUBSCRIPTION_PLANS: "/plans/get-subscription-plans",
	},
	blogs: {
		SUBSCRIBED_BLOGS: "/blogs/subscribe-blogs",
		GET_FEATURED_BLOGS: "/blogs/featured-blogs",
		GET_BLOGS_CATEGORY: "/blogs/get-category",
		GET_PURCHASED_BLOGS: "/blogs/get-purchased-blogs",
		GET_BLOGS: "/blogs/get-blogs",
	},
} as const;
