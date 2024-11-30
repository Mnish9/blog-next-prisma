const routes = {
	SOCIAL_lOGIN_lODER: "/social-login",
	public: {
		LOGIN: "/login",
		SIGNUP: "/signup",
		FORGOT_PASSWORD: "/forgot-password",
		VERIFY_OTP: "/verify-otp",
		RESET_PASSWORD: "/reset-password",
	},
	private: {
		DASHBOARD: "/dashboard",
		PROFILE: "/profile",
		SETTINGS: "/settings",
		REPORTS: "/reports",
		SUBSCRIPTION: "/subscription",
		BILLING: "/billing",
		PURCHASED_BLOGS: "/purchased-blogs",
		UPLOAD_REPORT_OPTION: "upload-report-option",
		SCHEDULE_REQUISITION: "schedule-requisition",
	},
	common: {
		HOME: "/",
		BLOOD_ANALYST: "/home-report",
		TESTIMONIALS: "/testimonials",
		BLOG_DETAIL: "/blog-detail",
		BLOGS: "/blog",
		STORY: "/story",
		TERMS_CONDITIONS: "/terms-conditions",
		PRIVACY_POLICY: "/privacy-policy",
		DATA_SECURITY: "/data-security",
	},
};

export default routes;
