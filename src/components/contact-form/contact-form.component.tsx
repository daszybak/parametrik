import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button, Textarea, TextInput, Title } from '@mantine/core';
import { useStyles } from './contact-form.styles';

const contactFormInputs = z.object({
  name: z.string().min(2).max(40),
  company: z.string().min(2).max(40),
  email: z.string().email(),
  phone: z
    .string()
    .min(5)
    .max(20)
    .regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}|^00[0-9]{2}[0-9]{3}[0-9]{4}$/),
  message: z.string().min(10).max(1000),
});

type ContactFormInputs = z.infer<typeof contactFormInputs>;

interface ContactFormProps extends React.ComponentPropsWithoutRef<'form'> {}

const ContactForm: React.FC<ContactFormProps> = ({ className, ...other }) => {
  const { classes, cx } = useStyles();
  const { handleSubmit, register } = useForm<ContactFormInputs>({
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
        <TextInput label="Name" {...register('name')} />
        <TextInput label="company" {...register('company')} />
        <TextInput label="email" {...register('email')} />
        <TextInput label="phone" {...register('phone')} />
        <Textarea label="message" {...register('message')} />
        <Button type="submit">SUBMIT</Button>
      </form>
    </>
  );
};

export default ContactForm;
