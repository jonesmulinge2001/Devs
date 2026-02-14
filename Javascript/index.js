const characters = [
    {
      name: "Monkey D. Luffy",
      image: "https://th.bing.com/th/id/OIP.N4kWu1jrX1q3UIJ5j6WHewHaDt?w=315&h=175&c=7&r=0&o=5&pid=1.7",
      quote: `"I’m gonna be King of the Pirates!"`,
      power: "Gear Fifth - Sun God Nika ☀️"
    },
    {
      name: "Roronoa Zoro",
      image: "https://tse2.mm.bing.net/th/id/OIP.DJpNZhCU9cJfRWOFCJ6S7AHaEK?rs=1&pid=ImgDetMain",
      quote: `"Nothing happened."`,
      power: "Three Sword Style - Asura 🗡️"
    },
    {
      name: "Trafalgar D. Water Law",
      image: "https://th.bing.com/th?id=OIF.pmvzy7%2f0KBqQOS5qeFDnzA&w=312&h=175&c=7&r=0&o=5&pid=1.7",
      quote: `"The weak don’t get to decide how they die."`,
      power: "Ope Ope no Mi - Room ✨"
    },
    {
      name: "Gojo Satoru",
      image: "https://th.bing.com/th/id/OIP.wbIvU-Er7rYQc_BxmI-myAHaEK?w=286&h=180&c=7&r=0&o=5&pid=1.7",
      quote: `"Throughout heaven and earth, I alone am the honored one."`,
      power: "Limitless - Hollow Purple 🔮"
    },
    {
      name: "Kakashi Hatake",
      image: "https://th.bing.com/th/id/OIP.tIclBla7uqvIg_u1ckTKfQHaEK?w=244&h=180&c=7&r=0&o=5&pid=1.7",
      quote: `"In the ninja world, those who break the rules are scum... but those who abandon their friends are worse than scum."`,
      power: "Sharingan - Lightning Blade ⚡"
    }
  ];

  // function to manipulate html element
  function awakenPower() {
    const pStatus = document.getElementById('status');
    pStatus.textContent = '🔥🔥 Power Awakened! You’ve reached your true potential';
    pStatus.classList.add('power-boost');
  }

  // fuction to display one character randomnly
  function toggleCharacter() {
    const divContainer = document.getElementById('hero-container');
    const existing = document.getElementById('hero'); // if it is there

    // check if the class name existing is there
    if(existing) {
        divContainer.removeChild(existing);
    }
    else {
        // select one character random
        const character = characters[Math.floor(Math.random() * characters.length)];
        const characterDiv = document.createElement('div');
        characterDiv.id = 'hero';
        characterDiv.className = 'character-box';
        characterDiv.innerHTML = `
        <h2>${character.name}</h2>
        <img src = "${character.image}" alt="${character.name}">
        <h3>Power: <span class="power">${character.power}</span></h3>
        <p class="quote">${character.quote}</p>
        `;
        divContainer.appendChild(characterDiv);
    }
  }