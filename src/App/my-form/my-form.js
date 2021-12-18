import './my-form.scss';
import { Formik } from 'formik';

const MyForm = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    age: '',
                    tel: '',
                    email: ''
                }}
                validate={values => {
                    const errors = {};
                    if(values.firstName === "") {
                        errors.firstName = "Это поле обязательно для заполнения!"
                    }
                    if(!values.lastName) {
                        errors.lastName = "Это поле обязательно для заполнения!"
                    }
                    if(values.age <= 0 || values.age > 110) {
                        errors.age = "Не коректный возраст!"
                    }
                    if(
                        !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/i.test(values.tel)
                    ) {
                        errors.tel = "Неправильный формат номера телефона!"
                    }
                    if(
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = "Неправильный формат E-mail!"
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    console.log(values);  
                }}
            >

            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>
            <h1>Форма регистрации:</h1>
            <label htmlFor="firstName">
                Имя:
                <input 
                    type="text" 
                    id='firstName' 
                    className='allInptForm'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}/>
            </label>
            <span>{errors.firstName && touched.firstName && errors.firstName}</span>
            <label htmlFor="lastName">
                Фамилия:
                <input 
                    type="text" 
                    id='lastName' 
                    className='allInptForm'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}/>
            </label>
            <span>{errors.lastName && touched.lastName && errors.lastName}</span>
            <label htmlFor="age">
                Возраст:
                <input 
                    type="number" 
                    id='age' 
                    className='allInptForm'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}/>
            </label>
            <span>{errors.age && touched.age && errors.age}</span>
            <label htmlFor="tel">
                Телефон:
                <input 
                    type="tel"  
                    id='tel' 
                    className='allInptForm'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tel}/>
            </label>
            <span>{errors.tel && touched.tel && errors.tel}</span>
            <label htmlFor="email">
                E-mail:
                <input 
                    type="email"  
                    id='email' 
                    className='allInptForm'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}/>
            </label>
            <span>{errors.email && touched.email && errors.email}</span>
            <div className="form-btn">
                <button type="reset">Очистить форму</button>
                <button type="submit">Зарегистрироваться</button>
            </div>
        </form>
            )}
            </Formik>
        </div>
    )
}

export default MyForm;
