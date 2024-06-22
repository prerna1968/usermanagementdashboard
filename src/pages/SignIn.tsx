import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { loginUser } from '../features/auth/authApi';
import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import { FormField } from '../components/FormInput';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../constants/enum';
import useNavigation from '../hooks/useNavigation';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useNavigation();

  const { handleSubmit: handleSubmitForm, control: controlForm } = useForm({
    mode: 'onChange' || 'onSubmit',
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await loginUser(data.email, data.password);
      dispatch(login(response.token));
      localStorage.setItem('token', response.token);
      navigate(AppRoutes.DASHBOARD);
    } catch (error) {
      console.error('Failed to login', error);
    }
  };

  return (
    <Card elevation={0} sx={{ position: 'absolute', backgroundColor: '#FEEFD9', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Card
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          marginBottom: 'auto',
          marginTop: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '447px',
          height: 'fit-content',
        }}
      >
        <CardContent>
          <Stack spacing={4} sx={{ padding: '40px' }}>
            <Stack>
              <Typography variant={'h5'}>SIGN IN TO THE PORTAL</Typography>
            </Stack>
            <form onSubmit={handleSubmitForm(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    render={({ field: { ref, ...field }, fieldState: { invalid, error } }) => (
                      <FormField label="Email ID or Phone Number" error={error?.message}>
                        <TextField
                          size="small"
                          placeholder={'Enter Email ID or Phone number'}
                          onChange={(e: any) => {
                            field.onChange(e);
                          }}
                          error={Boolean(error)}
                          value={field.value ? `${field.value}` : ''}
                          inputRef={ref}
                        ></TextField>
                      </FormField>
                    )}
                    name={'email'}
                    control={controlForm}
                    rules={{
                      required: 'Please Enter valid Email ID or Phone Number',
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    render={({ field: { ref, ...field }, fieldState: { invalid, error } }) => (
                      <FormField label="Password" error={error?.message}>
                        <TextField
                          type="password"
                          size="small"
                          placeholder={'Enter your password'}
                          onChange={(e: any) => {
                            field.onChange(e);
                          }}
                          error={Boolean(error)}
                          value={field.value ? `${field.value}` : ''}
                          inputRef={ref}
                        ></TextField>
                      </FormField>
                    )}
                    name={'password'}
                    control={controlForm}
                    rules={{
                      required: 'Please enter valid password',
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    size="large"
                    sx={{
                      backgroundColor: '#F26522',
                      color: 'white',
                      width: '100%',
                      padding: '10px',
                    }}
                  >
                    SIGN IN
                  </Button>
                </Grid>
              </Grid>
            </form>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              or
            </Grid>
            <Button
              size="large"
              sx={{
                backgroundColor: '#F26522',
                color: 'white',
                width: '100%',
              }}
              onClick={() => navigate(AppRoutes.SIGNUP)}
            >
              SIGN UP
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Card>
  );
};

export default SignIn;
