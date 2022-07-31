import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BiBarcodeReader } from 'react-icons/bi';
import { BsFacebook, BsYoutube } from 'react-icons/bs';
import { FaApplePay, FaCcMastercard, FaGooglePay } from 'react-icons/fa';
import { RiPaypalFill, RiVisaLine } from 'react-icons/ri';
import { TiSocialInstagramCircular } from 'react-icons/ti';

export default function Footer() {
    return(
        <div className='footer-container'>
            <div className='icons-container'>
                <BsFacebook className='icon-socials a' />
                <AiFillTwitterCircle className='icon-socials b' />
                <TiSocialInstagramCircular className='icon-socials c' />
                <BsYoutube className='icon-socials d' />
            </div>
            <div className='payment-container'>
                <h3>Pagamento</h3>
                <FaGooglePay className='icon-pay' />
                <RiPaypalFill className='icon-pay' />
                <FaApplePay className='icon-pay' />
                <BiBarcodeReader className='icon-pay' />
                <FaCcMastercard className='icon-pay' />
                <RiVisaLine className='icon-pay' />
            </div>
            <div className='information-container'>
                <h4 className='company'>W2W E-Commercer de Vinhos S.A.</h4>
                <h4 className='cnpj'>CNPJ: 09.813.204/0002-05</h4>
                <p className='address'>Rua Comendador Alcides Simão Helou, 1478</p>
                <p className='address cep'>Serra - ES - CEP 29168-090</p>
                <h4 className='warning'>SE BEBER, NÃO DIRIJA. APRECIE COM MODERAÇÃO.
                    A VENDA DE BEBIDAS ALCOÓLICAS É PROIBIDA PARA
                    MENORES DE 18 ANOS.
                </h4>
            </div>
        </div>
    )
}