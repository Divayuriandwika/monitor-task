import React from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {addTask} from '../redux/actions/assignmentAction'
import {useDispatch} from 'react-redux'


export default function Add() {

    const dispatch = useDispatch()

    return(
                        <Formik
									initialValues={{
										name: '',
										division: '',
                                        assignment: '',
                                        deadline: '',
                                        phone: ''
									}}
									// validate={(values) => {
									// 	const errors = {};
									// 	if (!values.division) {
									// 		errors.division = 'Required';
									// 	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.division)) {
									// 		errors.division = 'Invalid division address';
									// 	}

									// 	if (!values.password) {
									// 		errors.password = 'Required';
									// 	}

									// 	return errors;
									// }}
									onSubmit={async(values) => {
										await dispatch(addTask(values));
										await alert('Assignment successfully added');
                                        // await history.push('/');
                                        
									}}
								>
									{({ handleChange, handleSubmit, values, isSubmitting, errors, touched }) => {
										return (
											<form  noValidate onSubmit={handleSubmit}>
												<TextField
													variant="outlined"
													required
													fullWidth
													id="name"
													label="Employee's Name"
													name="name"
													autoComplete="name"
													onChange={handleChange}
													values={values.name}
                                                    size="small"
                                                    style={{ marginTop: 20, marginBottom: 20}}
												/>
												<TextField
													variant="outlined"
													style={{ marginBottom: 20}}
													required
													fullWidth
													id="division"
													label="Division"
													name="division"
													autoComplete="division"
													onChange={handleChange}
													values={values.division}
													size="small"
												/>
												<TextField
													variant="outlined"
													style={{ marginBottom: 20}}
													required
													fullWidth
													name="assignment"
													label="Assignment"
													type="assignment"
													id="assignment"
													autoComplete="assignment"
													onChange={handleChange}
													values={values.assignment}
													size="small"
												/>
                                                <TextField
													variant="outlined"
													style={{ marginBottom: 20}}
													required
													fullWidth
													name="deadline"
													label="Deadline"
													type="deadline"
													id="deadline"
													autoComplete="deadline"
													onChange={handleChange}
													values={values.deadline}
													size="small"
												/>
                                                <TextField
													variant="outlined"
													style={{ marginBottom: 20}}
													required
													fullWidth
													name="phone"
													label="Phone Number"
													type="phone"
													id="phone"
													autoComplete="phone"
													onChange={handleChange}
													values={values.phone}
													size="small"
												/>
												<Button
													type="submit"
													fullWidth
													variant="contained"
													color="inherit"
													disabled={isSubmitting}
													style={{
														borderRadius: '3px',
														fontFamily: 'Roboto, sans-serif',
														backgroundColor: '#329da8',
														marginTop: '10px',
														color: '#6C5434'
													}}
												>
													<b>Save</b>
												</Button>
											</form>
										);
									}}
								</Formik>
    )
}