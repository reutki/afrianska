import { Paper, Typography, TextField, Button } from "@mui/material";
import React from "react";
import { StyledForm } from "./styled";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../pages/theme";
import { SubmitHandler, useForm, Controller, useFormState } from "react-hook-form";

interface IContactForm{
name:string;
email:string;
message:string;

}

export const ContactForm:React.FC =()=>{
    let notSent =false;
    const {handleSubmit,control} = useForm();
    const onSubmit: SubmitHandler<IContactForm> = data => console.log(data);
    const {errors } = useFormState({control});
    return(
        <StyledForm>

        <ThemeProvider theme={theme}>

        <div className="contactPage">
            <Paper id="paper" elevation={3}>
              <form onSubmit={handleSubmit(onSubmit)}>
           
    <div className="card">
      <section>
      <Typography variant="h5" fontWeight={600} color="primary.dark">Send Us A Message</Typography>
    </section>
    
    <section>
      <Typography variant="h5" color="primary.dark">Full Name</Typography>
      <Controller 
                control={control}
                rules={{required:'Introduce your Name'}}
                name="name"
                render = {({field})=>(
                  <TextField label="Your Name" fullWidth variant="outlined" error={!!errors.name?.message} helperText={errors.name?.message} onChange={(event)=>field.onChange(event)} value={field.value}/>
                )}
                />

    </section>
    <section>
      <Typography variant="h5" color="primary.dark">Email</Typography>
      <Controller 
                control={control}
                name="email"
                rules={{required:'Introduce your Email'}}
                
                render = {({field})=>(
                  <TextField label="Your Email" fullWidth variant="outlined" error={!!errors.email?.message} helperText={errors.email?.message} onChange={(event)=>field.onChange(event)} value={field.value}/>
                )}
                />

    </section>
    <section>

      <Typography variant="h5" color="primary.dark">Message</Typography>
      <Controller 
                control={control}
                name="message"
                rules={{required:'Introduce your Message'}}
                render = {({field})=>(
                  <TextField label="Your Message"  multiline minRows={3} maxRows={5} error={!!errors.message?.message} helperText={errors.message?.message} fullWidth variant="outlined" onChange={(event)=>field.onChange(event)} value={field.value}/>
                )}
                />
    </section>
    <section>

      <Button id="submit" type="submit" variant="contained" fullWidth color="secondary">Submit</Button>
    </section>
    </div>
              </form>
      </Paper>
            {/* {notSent?<ContactPage/>:<CompleteForm/>} */}

        </div>
        </ThemeProvider>
        </StyledForm>

    )
}


