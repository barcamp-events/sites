'use strict';

const ezClipboard={},getStatusObject=(a=!1,b=null)=>({success:a,value:b});ezClipboard.__setupTextArea__=(a='')=>{const b=document.createElement('textarea');return b.value=a,b.style.position='fixed',b.style.top=0,b.style.right=0,b.style.width=0,b.style.height=0,document.body.appendChild(b),b},ezClipboard.copyPlain=(a='',b=()=>{})=>{let c=!1,d=null;const e=ezClipboard.__setupTextArea__(a);e.select();try{c=document.execCommand('copy'),d=getStatusObject(c,a);}catch(a){d=getStatusObject();}return document.body.removeChild(e),b(d),d},ezClipboard.copyFromElement=(a=null,b=()=>{})=>{let c=!1,d=null;a.select();try{c=document.execCommand('copy'),d=getStatusObject(c,a);}catch(b){d=getStatusObject(c,a);}};

exports.ezClipboard = ezClipboard;
