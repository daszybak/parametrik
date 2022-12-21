import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button, Textarea, TextInput } from '@mantine/core';
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

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const { classes } = useStyles();
  const { handleSubmit, register } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormInputs),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    //create form with inputs from contactFormInputs
    <form onSubmit={handleSubmit(onSubmit)} className={classes.formContainer}>
      <TextInput label="Name" {...register('name')} />
      <TextInput label="company" {...register('company')} />
      <TextInput label="email" {...register('email')} />
      <TextInput label="phone" {...register('phone')} />
      <Textarea label="message" {...register('message')} />
      <Button type="submit">SUBMIT</Button>
    </form>
  );
};

export default ContactForm;
