<script>
document.addEventListener('DOMContentLoaded', function() {
  const text = document.querySelector('#animated-text');
  const words = text.innerText.split(' ');
  text.innerHTML = '';
  
  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement('span');
    word.split('').forEach((letter, letterIndex) => {
      const span = document.createElement('span');
      span.innerText = letter;
      span.style.display = 'inline-block';
      span.style.transition = 'transform 0.2s ease, color 0.2s ease';
      wordSpan.appendChild(span);
    });
    text.appendChild(wordSpan);
    if (wordIndex < words.length - 1) {
      text.appendChild(document.createTextNode(' '));
    }
  });

  const spans = text.querySelectorAll('span span');
  spans.forEach((span, index) => {
    setTimeout(() => {
      span.style.transform = 'translateY(-10px)';
      span.style.color = '#369793';
      setTimeout(() => {
        span.style.transform = 'translateY(0)';
        span.style.color = 'white';
      }, 200);
    }, index * 30);
  });
});
</script>
