(()=>{
 const B=window.MACHINE_BRAND,all=B.models,field=document.getElementById('filter'),cards=document.getElementById('cards');
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const fold=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
 function render(){const q=fold(field.value),list=all.filter(m=>fold([m.id,m.name,m.controller,m.family].join(' ')).includes(q));
 cards.innerHTML=list.map(m=>`<article class="machine-card"><div class="card-heading"><span class="eyebrow">${esc(m.family)}</span><span class="model-number">${esc(m.id)}</span></div><a class="machine-photo" href="${esc(m.entry)}" tabindex="-1" aria-hidden="true"><img src="${B.asset(m)}" alt="" width="440" height="300"></a><div class="card-content"><p class="controller">${esc(m.controller)}</p><h3>${esc(m.name)}</h3><p class="card-description">${esc(m.description)}</p><dl class="card-facts"><div><dt>Hệ thống</dt><dd>${m.systems}</dd></div><div><dt>Khối chức năng</dt><dd>${m.blocks}</dd></div><div><dt>Trang điện</dt><dd>${m.pages}</dd></div></dl><div class="card-bottom"><p>TÀI LIỆU ĐIỆN<strong>${esc(m.drawing)}</strong></p><a class="open-machine" href="${esc(m.entry)}" aria-label="Mở máy ${esc(m.id)}">Mở máy <span aria-hidden="true">→</span></a></div></div></article>`).join('')||'<div class="empty-state"><h3>Không tìm thấy model</h3><p>Thử tên máy hoặc bộ điều khiển khác, ví dụ F3 hoặc FANUC.</p></div>';
 document.getElementById('count').textContent=String(list.length).padStart(2,'0')+' / '+String(all.length).padStart(2,'0')+' MODEL';}
 field.addEventListener('input',render);render();
 function legacy(){if(/^#(block\/|system\/|find\/|machine\/F3\/|home$)/.test(location.hash))location.replace('machines/F3/index.html'+location.hash)}
 addEventListener('hashchange',legacy);legacy();
})();
