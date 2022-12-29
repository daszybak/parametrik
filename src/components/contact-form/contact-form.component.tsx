import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button, Flex, Textarea, TextInput, Title } from '@mantine/core';
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
      <Flex justify="center" align="center" direction="column">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={cx(classes.formContainer, className)}
          {...other}
        >
          <TextInput
            label="Name"
            {...register('name')}
            error={errors.name?.message}
            styles={{
              error: {
                position: 'absolute',
              },
            }}
            className={classes.gridItem}
          />
          <TextInput
            label="email"
            {...register('email')}
            error={errors.email?.message}
            styles={{
              error: {
                position: 'absolute',
              },
            }}
            className={classes.gridItem}
          />
          <TextInput
            label="company"
            {...register('company')}
            error={errors.company?.message}
            styles={{
              error: {
                position: 'absolute',
              },
            }}
            className={classes.gridItem4}
          />
          <TextInput
            label="phone"
            {...register('phone')}
            error={errors.phone?.message}
            styles={{
              error: {
                position: 'absolute',
              },
            }}
            style={{
              alignSelf: 'end',
            }}
            className={classes.gridItem}
          />
          <Textarea
            label="message"
            minRows={6}
            {...register('message')}
            error={errors.message?.message}
            className={classes.gridItem5}
            styles={{
              error: {
                position: 'absolute',
              },
            }}
          />
          <Button
            type="submit"
            style={{
              justifySelf: 'center',
              alignSelf: 'center',
              maxWidth: '400px',
              width: '40%',
            }}
            className={classes.gridItem6}
          >
            SUBMIT
          </Button>
        </form>
      </Flex>
    </>
  );
};

export default ContactForm;
