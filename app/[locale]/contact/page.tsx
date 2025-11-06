'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
export default function Contact(){
  const t = useTranslations();
  const [status,setStatus]=useState<'idle'|'sending'|'ok'|'error'>('idle');
  const onSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setStatus('sending');
    try{
      const res=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
      if(!res.ok) throw new Error('fail');
      setStatus('ok'); (e.target as HTMLFormElement).reset();
    }catch{ setStatus('error'); }
  };
  return (<section className='container py-14'>
    <h1 className='text-3xl font-bold'>{t('contact.title')}</h1>
    <div className='mt-6 grid md:grid-cols-2 gap-8'>
      <form onSubmit={onSubmit} className='rounded-3xl border border-slate-200 p-6 shadow-sm bg-white'>
        <div className='grid grid-cols-1 gap-4'>
          <input name='name' required className='px-4 py-3 rounded-2xl border' placeholder='Nombre / Name' />
          <input name='email' required type='email' className='px-4 py-3 rounded-2xl border' placeholder='Correo / Email' />
          <textarea name='message' required className='px-4 py-3 rounded-2xl border min-h-[120px]' placeholder='¿En qué podemos ayudarte? / How can we help?' />
          <button className='btn-primary' type='submit' disabled={status==='sending'}>{status==='sending'?'Enviando…':'Enviar'}</button>
          {status==='ok' && <p className='text-sm text-green-600'>{t('contact.sent')}</p>}
          {status==='error' && <p className='text-sm text-red-600'>{t('contact.error')}</p>}
        </div>
      </form>
      <div className='rounded-3xl border border-slate-200 p-6 bg-slate-50'>
        <div className='font-semibold'>ASSI S.U.R.L.</div>
        <div className='mt-2 text-sm text-slate-700'>Empresa de Aplicaciones, Soluciones y Servicios Informáticos.</div>
        <div className='mt-4 text-sm'><div><span className='font-semibold'>Tel:</span> +53 50946352, +53 50946359</div><div><span className='font-semibold'>Correo:</span> assi@enet.cu</div></div>
      </div>
    </div>
  </section>);
}
