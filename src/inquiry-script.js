function setupInquiry(config){
 const form=document.getElementById('inquiryForm'),box=document.getElementById('generated');
 form.querySelectorAll('[required]').forEach(input=>input.addEventListener('input',()=>input.setCustomValidity('')));
 form.addEventListener('submit',event=>{
  event.preventDefault();
  for(const input of form.querySelectorAll('[required]')){input.setCustomValidity(input.value.trim()?'':config.messages.required);}
  if(!form.reportValidity())return;
  const data=new FormData(form);
  const text='TOKYO MEDI - '+config.title+'\n\n'+config.labels.map((label,i)=>label+': '+(String(data.get('f'+i)||'').trim()||'-')).join('\n');
  box.replaceChildren();box.style.display='block';
  const heading=document.createElement('h2');heading.textContent=config.messages.heading;
  const note=document.createElement('p');note.textContent=config.messages.notice;
  const label=document.createElement('label');label.htmlFor='inquiryDraft';label.textContent=config.messages.label;
  const draft=document.createElement('textarea');draft.id='inquiryDraft';draft.readOnly=true;draft.value=text;
  const actions=document.createElement('div');actions.className='draftActions';
  const copy=document.createElement('button');copy.type='button';copy.className='btn ghost';copy.textContent=config.messages.copy;
  const mail=document.createElement('a');mail.className='btn teal';mail.textContent=config.messages.mail;mail.href='mailto:'+config.email+'?subject='+encodeURIComponent('TOKYO MEDI - '+config.title)+'&body='+encodeURIComponent(text);
  const status=document.createElement('p');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(text);status.textContent=config.messages.copied;}catch{draft.focus();draft.select();status.textContent=config.messages.manual;}});
  actions.append(copy,mail);box.append(heading,note,label,draft,actions,status);box.focus();box.scrollIntoView({block:'start'});
 });
}
export function inquiryScript(labels,title,locale,email){
 const messages=locale==='zh-hans'?{heading:'询价邮件草稿',notice:'草稿已整理，尚未发送。请检查后复制，或打开邮件客户端手动发送。',label:'邮件正文',copy:'复制邮件正文',mail:'打开邮件客户端',copied:'邮件正文已复制。',manual:'请复制已选中的邮件正文。',required:'请填写此项，不能只输入空格。'}:locale==='ja'?{heading:'照会メール下書き',notice:'下書きを作成しました。まだ送信されていません。確認後、コピーするかメールアプリから送信してください。',label:'メール本文',copy:'本文をコピー',mail:'メールアプリを開く',copied:'本文をコピーしました。',manual:'選択された本文をコピーしてください。',required:'空白以外の内容を入力してください。'}:{heading:'Inquiry email draft',notice:'Draft prepared; nothing has been sent. Review it, then copy or open your email app to send manually.',label:'Email body',copy:'Copy email body',mail:'Open email app',copied:'Email body copied.',manual:'Copy the selected email body.',required:'Please enter a value, not only spaces.'};
 return `<script>(${setupInquiry.toString()})(${JSON.stringify({labels,title,messages,email}).replace(/</g,'\\u003c')});</script>`;
}
