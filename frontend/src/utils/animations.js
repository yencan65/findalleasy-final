export const highlightVitrin = () => {
  const el = document.getElementById('vitrin');
  if (!el) return;
  el.classList.add('ring-2','ring-[#CDAA7D]','ring-offset-2','ring-offset-slate-900');
  setTimeout(()=>{
    el.classList.remove('ring-2','ring-[#CDAA7D]','ring-offset-2','ring-offset-slate-900');
  }, 1000);
};

export const highlightFooter = () => {
  const el = document.getElementById('app-footer');
  if (!el) return;
  const original = el.style.color;
  el.style.color = '#CDAA7D';
  setTimeout(()=>{ el.style.color = original; }, 1000);
};
