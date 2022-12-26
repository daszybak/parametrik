import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button, Textarea, TextInput, Title } from '@mantine/core';
import { useStyles } from './contact-form.styles';

const contactFormInputs = z.object({
  name: z
    .string()
    .min(2, 'Please enter a name longer than 2 letters')
    .max(40, 'Please enter a name shorter than 40 letters'),
  company: z
    .string()
    .min(2, 'Please enter a company name longer than 2 letters')
    .max(40, 'Please enter a company name shorter than 40 letters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}|^00[0-9]{2}[0-9]{3}[0-9]{4}$/,
      'Please enter a valid phone number'
    ),
  message: z
    .string()
    .min(10, 'Please enter a message longer than 10 letters')
    .max(1000, 'Please enter a message shorter than 1000 letters'),
});

type ContactFormInputs = z.infer<typeof contactFormInputs>;

interface ContactFormProps extends React.ComponentPropsWithoutRef<'form'> {}

const ContactForm: React.FC<ContactFormProps> = ({ className, ...other }) => {
  const { classes, cx } = useStyles();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormInputs),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    //create form with inputs from contactFormInputs
    <>
      <Title
        order={3}
        style={{
          marginBottom: '2rem',
        }}
      >
        Contact Us
      </Title>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cx(classes.formContainer, className)}
        {...other}
      >
        <TextInput
          label="Name"
          {...register('name')}
          className={classes.gridRow1}
          error={errors.name?.message}
          styles={{
            error: {
              position: 'absolute',
            },
          }}
        />
        <TextInput
          label="company"
          {...register('company')}
          className={classes.gridRow1}
          error={errors.company?.message}
          styles={{
            error: {
              position: 'absolute',
            },
          }}
        />
        <TextInput
          label="email"
          {...register('email')}
          style={{
            gridRow: '2',
            gridColumn: 1,
          }}
          error={errors.email?.message}
          styles={{
            error: {
              position: 'absolute',
            },
          }}
        />
        <TextInput
          label="phone"
          {...register('phone')}
          style={{
            gridRow: '3',
            gridColumn: 1,
          }}
          error={errors.phone?.message}
          styles={{
            error: {
              position: 'absolute',
            },
          }}
        />
        <Textarea
          label="message"
          minRows={7}
          {...register('message')}
          error={errors.message?.message}
          style={{
            gridRow: '2 / 4',
            gridColumn: 2,
            height: '100%',
          }}
          styles={{
            error: {
              position: 'absolute',
            },
          }}
        />
        <Button
          type="submit"
          style={{
            gridRow: ' 4',
            gridColumn: '1 /3',
            justifySelf: 'center',
            alignSelf: 'center',
            maxWidth: '400px',
            width: '40%',
          }}
        >
          SUBMIT
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
