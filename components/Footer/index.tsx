import React from 'react'
import {FooterStyle } from  './styled'
import { Button, Typography } from '@mui/material'
import Image from 'next/image'
import { IconButton } from '@mui/material'
import Link from '@mui/material/Link';
import List from '@mui/material'
import { ListItem } from '@mui/material'
import { Slide1Style } from '../Slide1/styled'
import Contact from '../../pages/contact'

export const Footer=()=>{

    function link(){
        <Link href='/contact'/>
    }
    return(
        <FooterStyle>

        <div className='main'>

        <div className='top'>
        <div className='text'><h1 className='titleTop'>Interested to work with our team?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div  className='button'><Button color="secondary" fullWidth variant="contained" href="/contact">Let's Talk</Button></div>

        </div>
        <hr color='white' className='line'/>
        <div className='bottom'>
        <div className='column1'>
            <div className='logo'><IconButton size="large"><Image className='logoImage' src={'/logo.svg'} alt={'logo'} layout="fill" height={10} width={10}/></IconButton>
            <Typography variant='h4' fontWeight={500}>Afrianska</Typography></div>
            <div className='link'>
                <div className='a'>

                <Typography variant='h5'>A.</Typography>
                <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>

                </div>
                <div className='phone'>

                <Typography variant='h5'>T.</Typography>
                <Link underline="hover" color="inherit" href="tel:+62-817-000-1234">+62-817-000-1234</Link>
                </div>
                <div className='email'>

                <Typography variant='h5'>E.</Typography>
                <Link underline="hover" color="inherit" href="mailto:hello.afrian@gmail.com">hello.afrian@gmail.com</Link>

                </div >

            </div>
        
        
        </div>
        <div className='column2'>
            <div className='title'><h2>About US</h2></div>
        <div className='links'>
           
            <div className='option1'><Link href="/Blog" underline="none" color="inherit" >About</Link></div>
            <div className='option2'><Link href="#" underline="none"
  color="inherit">What we Do</Link ></div>
            <div className='option3'><Link href="#" underline="none"
 color="inherit">Project</Link></div>
            <div className='option4'><Link href="#" underline="none"
 color="inherit">How It Work With Us</Link></div>
 </div>
        </div>
        <div className='column3'>
        <div className='title'><h2>Follow US</h2></div>
        <div className='links'>

            <div className='instagram'><Link href="www.instagram.com" underline="none"
 color="inherit">Instagram</Link></div>
            <div className='facebook'><Link href="www.facebook.com" underline="none"
 color="inherit">Facebook</Link></div>
            <div className='linkedin'><Link href="www.linkedin.com" underline="none"
 color="inherit">Linkedin</Link></div>
            <div className='youtube'><Link href="www.youtube.com" underline="none"
 color="inherit">Youtube</Link></div>
 </div>
        </div>
        </div>
        </div>
        </FooterStyle>
    )
}