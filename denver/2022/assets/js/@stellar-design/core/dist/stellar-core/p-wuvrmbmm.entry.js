import{r as t,h as a,g as s}from"./p-8388b2f5.js";const e=class{constructor(a){t(this,a),this.in=6e3,this.out=8300,this.complement=!1}render(){return a("div",{class:"line","data-start":this.in-100,"data-end":this.in,"data-opacity-start":"0","data-opacity-end":"1","data-translatey-start":"10","data-translatey-end":"0"},a("div",{class:"line","data-start":this.out-100,"data-end":this.out,"data-opacity-start":"1","data-opacity-end":"0"},a("slot",null)))}get element(){return s(this)}static get style(){return"stellar-interview-line{display:block;position:absolute;bottom:2rem;width:100%;left:0;right:0;padding:0 2rem;text-align:center}stellar-interview-line[complement]{opacity:.825;bottom:1rem;-webkit-transform:scale(.5);transform:scale(.5)}"}};export{e as stellar_interview_line};