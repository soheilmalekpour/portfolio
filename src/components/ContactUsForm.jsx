import {
    Button,
    CardActions,
    CardContent,
    Grid,
    InputAdornment,
    TextField,
    Typography,
    Paper,
} from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TopicIcon from '@mui/icons-material/Topic';
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from "formik";
import { contactValidationSchema } from "../validations/contactValidation";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUsForm = ({ theme, isLightMode }) => {
    // Env
    const VITE_SITE_KEY = import.meta.env.VITE_SITE_KEY;

    const contactInputNames = {
        fullname: '',
        email: '',
        phone: '',
        subject: '',
        description: '',
        recaptcha: ''
    }

    const formik = useFormik({
        initialValues: contactInputNames,
        onSubmit: (values) => console.log("Form Values: ", values),
        validationSchema: contactValidationSchema
    });

    return (
        <Grid item size={{ xs: 12, md: 7 }}>
            <Paper
                elevation={0}
                sx={{
                    bgcolor: isLightMode
                        ? 'rgba(255, 255, 255, 0.7)'
                        : 'rgba(30, 41, 59, 0.5)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    border: isLightMode
                        ? '1px solid rgba(168, 85, 247, 0.2)'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                    overflow: 'hidden'
                }}
            >
                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h5" sx={{
                            color: isLightMode ? '#a855f7' : '#60a5fa',
                            fontWeight: 700,
                            mb: 3
                        }}>
                            ارسال پیام
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item size={{ xs: 12, lg: 6 }}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    color="info"
                                    label="نام و نام خانوادگی"
                                    name="fullname"
                                    helperText={formik.touched.fullname ? formik.errors.fullname : null}
                                    error={Boolean(formik.touched.fullname && formik.errors.fullname)}
                                    value={formik.values?.fullname}
                                    onChange={formik.handleChange}
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <FaceIcon sx={{ color: isLightMode ? '#a855f7' : '#60a5fa' }} />
                                            </InputAdornment>
                                        )
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            color: isLightMode ? '#1e293b' : '#f1f5f9',
                                            '& fieldset': {
                                                borderColor: isLightMode
                                                    ? 'rgba(168, 85, 247, 0.3)'
                                                    : 'rgba(255, 255, 255, 0.2)',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: isLightMode ? '#a855f7' : '#60a5fa',
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: isLightMode ? '#6b7280' : '#94a3b8',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, lg: 6 }}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    color="info"
                                    label="ایمیل"
                                    name="email"
                                    helperText={formik.touched.email ? formik.errors.email : null}
                                    error={Boolean(formik.touched.email && formik.errors.email)}
                                    value={formik.values?.email}
                                    onChange={formik.handleChange}
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <EmailIcon sx={{ color: isLightMode ? '#a855f7' : '#60a5fa' }} />
                                            </InputAdornment>
                                        )
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            color: isLightMode ? '#1e293b' : '#f1f5f9',
                                            '& fieldset': {
                                                borderColor: isLightMode
                                                    ? 'rgba(168, 85, 247, 0.3)'
                                                    : 'rgba(255, 255, 255, 0.2)',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: isLightMode ? '#a855f7' : '#60a5fa',
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: isLightMode ? '#6b7280' : '#94a3b8',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, lg: 6 }}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    color="info"
                                    label="شماره تلفن"
                                    name="phone"
                                    helperText={formik.touched.phone ? formik.errors.phone : null}
                                    error={Boolean(formik.touched.phone && formik.errors.phone)}
                                    value={formik.values?.phone}
                                    onChange={formik.handleChange}
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <LocalPhoneIcon sx={{ color: isLightMode ? '#a855f7' : '#60a5fa' }} />
                                            </InputAdornment>
                                        )
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            color: isLightMode ? '#1e293b' : '#f1f5f9',
                                            '& fieldset': {
                                                borderColor: isLightMode
                                                    ? 'rgba(168, 85, 247, 0.3)'
                                                    : 'rgba(255, 255, 255, 0.2)',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: isLightMode ? '#a855f7' : '#60a5fa',
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: isLightMode ? '#6b7280' : '#94a3b8',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, lg: 6 }}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    color="info"
                                    label="موضوع"
                                    name="subject"
                                    helperText={formik.touched.subject ? formik.errors.subject : null}
                                    error={Boolean(formik.touched.subject && formik.errors.subject)}
                                    value={formik.values?.subject}
                                    onChange={formik.handleChange}
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <TopicIcon sx={{ color: isLightMode ? '#a855f7' : '#60a5fa' }} />
                                            </InputAdornment>
                                        )
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            color: isLightMode ? '#1e293b' : '#f1f5f9',
                                            '& fieldset': {
                                                borderColor: isLightMode
                                                    ? 'rgba(168, 85, 247, 0.3)'
                                                    : 'rgba(255, 255, 255, 0.2)',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: isLightMode ? '#a855f7' : '#60a5fa',
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: isLightMode ? '#6b7280' : '#94a3b8',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item size={12}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={5}
                                    label="متن پیام..."
                                    name="description"
                                    helperText={formik.touched.description ? formik.errors.description : null}
                                    error={Boolean(formik.touched.description && formik.errors.description)}
                                    value={formik.values?.description}
                                    onChange={formik.handleChange}
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            color: isLightMode ? '#1e293b' : '#f1f5f9',
                                            '& fieldset': {
                                                borderColor: isLightMode
                                                    ? 'rgba(168, 85, 247, 0.3)'
                                                    : 'rgba(255, 255, 255, 0.2)',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: isLightMode ? '#a855f7' : '#60a5fa',
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: isLightMode ? '#6b7280' : '#94a3b8',
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ p: 4, pt: 0, flexDirection: "column", alignItems: "start" }}>
                        <ReCAPTCHA
                            sitekey={VITE_SITE_KEY}
                            theme={theme.palette.mode}
                            hl="fa"
                            onChange={(value) => {
                                formik.setFieldValue('recaptcha', value)
                            }}
                        />
                        {formik.touched.recaptcha && formik.errors.recaptcha && (
                            <Typography variant="caption" color="error">
                                {formik.errors.recaptcha}
                            </Typography>
                        )}
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            startIcon={<SendIcon />}
                            sx={{
                                mt: 2,
                                py: 1.5,
                                background: isLightMode
                                    ? 'linear-gradient(45deg, #a855f7, #c084fc)'
                                    : 'linear-gradient(45deg, #3b82f6, #60a5fa)',
                                color: 'white',
                                fontWeight: 600,
                                '&:hover': {
                                    background: isLightMode
                                        ? 'linear-gradient(45deg, #9333ea, #a855f7)'
                                        : 'linear-gradient(45deg, #2563eb, #3b82f6)',
                                }
                            }}
                        >
                            ارسال پیام
                        </Button>
                    </CardActions>
                </form>
            </Paper>
        </Grid>
    );
}

export default ContactUsForm;