import * as Yup from 'yup';

export const contactValidationSchema = Yup.object().shape({
    fullname: Yup.string()
        .required('نام و نام خانوادگی الزامی است')
        .min(3, 'نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد')
        .max(50, 'نام و نام خانوادگی باید حداکثر ۵۰ کاراکتر باشد'),

    email: Yup.string()
        .email('ایمیل وارد شده معتبر نیست')
        .required('ایمیل الزامی است'),

    phone: Yup.string()
        .required('شماره تلفن الزامی است')
        .matches(/^[0-9]{11}$/, 'شماره تلفن باید ۱۱ رقم باشد'),

    subject: Yup.string()
        .required('موضوع الزامی است')
        .min(5, 'موضوع باید حداقل ۵ کاراکتر باشد')
        .max(100, 'موضوع باید حداکثر ۱۰۰ کاراکتر باشد'),

    description: Yup.string()
        .required('متن پیام الزامی است')
        .min(10, 'متن پیام باید حداقل ۱۰ کاراکتر باشد')
        .max(1000, 'متن پیام باید حداکثر ۱۰۰۰ کاراکتر باشد'),

    recaptcha: Yup.string()
        .required('لطفاً تأیید کنید که ربات نیستید')
});