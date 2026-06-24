(function(){
  const form = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const message = document.getElementById('formMessage');

  function setError(field, text) {
    const el = document.querySelector(`.error[data-for="${field}"]`);
    if (el) el.textContent = text || '';
  }

  function validate() {
    let ok = true;
    const emailVal = email.value.trim();
    const passVal = password.value;

    if (!emailVal) { setError('email','Email is required'); ok = false; }
    else if (!/^\S+@\S+\.\S+$/.test(emailVal)) { setError('email','Enter a valid email'); ok = false; }
    else setError('email','');

    if (!passVal) { setError('password','Password is required'); ok = false; }
    else if (passVal.length < 6) { setError('password','Password must be at least 6 characters'); ok = false; }
    else setError('password','');

    return ok;
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    message.textContent='';

    if (!validate()) return;

    const payload = { email: email.value.trim(), password: password.value, remember: !!document.getElementById('remember').checked };

    // Simulate server call
    message.textContent = 'Signing in...';
    setTimeout(() => {
      // replace this block with real fetch to your backend
      if (payload.email === 'user@example.com' && payload.password === 'password') {
        message.style.color = 'green';
        message.textContent = 'Login successful — redirecting...';
      } else {
        message.style.color = '#b91c1c';
        message.textContent = 'Invalid credentials';
      }
    }, 800);
  });

})();
