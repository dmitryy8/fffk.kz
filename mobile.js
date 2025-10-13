// Universal mobile handlers: toggle mobile menu open/close and close when tapping outside
(function(){
  function initMobileHandlers(){
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileClose = document.getElementById('mobileClose');
    if(!mobileToggle || !mobileMenu) return;

    mobileToggle.addEventListener('click', function(e){
      e.stopPropagation();
      const isOpen = mobileMenu.classList.toggle('open');
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    });

    if(mobileClose){
      mobileClose.addEventListener('click', function(){
        mobileMenu.classList.remove('open');
        mobileMenu.setAttribute('aria-hidden','true');
      });
    }

    // close when clicking outside
    document.addEventListener('click', function(e){
      if(!mobileMenu.classList.contains('open')) return;
      if(mobileMenu.contains(e.target)) return;
      if(e.target.closest && e.target.closest('#mobileToggle')) return;
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden','true');
    });
  }

  if(document.readyState === 'complete' || document.readyState === 'interactive') initMobileHandlers();
  else document.addEventListener('DOMContentLoaded', initMobileHandlers);
})();
