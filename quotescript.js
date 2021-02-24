const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const facebookBtn = document.getElementById('facebook');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [    {'author': 'Mark Rutte',
     'text': 'De horeca vernietigen en claimen liberaal te zijn.'
    },
    {'author': 'Mark Rutte',
     'text': 'De middenklasse vernietigen en claimen liberaal te zijn.'
    },
    {'author': 'Mark Rutte',
     'text': 'Mensen in de vernieling helpen met de toeslagenaffaire en rustig door regeren.'
    },
    {'author': 'Mark Rutte',
     'text': 'Instemmen met Wet Openbaarheid Bestuur en vervolgens onder het kopje \"persoonlijke mening\" alles verbergen.'
    },
    {'author': 'Mark Rutte',
     'text': 'Rutte doctrine: het ene zeggen (glashard liegen) en het andere doen.  '
    },
    {'author': 'Mark Rutte',
     'text': 'Bezuinigen op de zorg en 1,4 miljard euro weggeven aan grote bedrijven (afschaffen dividend belasting).'
    },
    {'author': 'Mark Rutte',
     'text': 'Zorgpersoneel corona compensatie van 1000 euro beloven en niet uitkeren.'
    },
    {'author': 'Mark Rutte',
     'text': 'Corona maatregelen doordrukken die wetenschappelijk bewezen niet werken (zoals mondkapjes plicht en avondklok).'
    },
    {'author': 'Mark Rutte',
     'text': 'Dankzij Rutte: MH17 dossier politiek gestuntel.'
    },
    {'author': 'Mark Rutte',
     'text': 'Onder Ruttes beleid: Hoogste stijging belastingen in de EU voor burgers.'
    },
    {'author': 'Mark Rutte',
     'text': 'Onder Ruttes beleid: BTW verhoging.'
    },
    {'author': 'Mark Rutte',
     'text': 'Onder Ruttes beleid: 53 ziekenhuizen failliet.'
    },
    {'author': 'Mark Rutte',
    'text': 'Onder Ruttes beleid: 77.000 zorgpersoneel ontslagen.'
    },
    {'author': 'Mark Rutte',
    'text': 'Onder Ruttes beleid: geen pensioen indexering.'
    },
    {'author': 'Mark Rutte',
    'text': 'Onder Ruttes beleid: aantal daklozen verdubbeld.'
    },
    {'author': 'Mark Rutte',
    'text': 'Onder Ruttes beleid: veel geld naar klimaatverandering maar geen visie erop.'
    },
    {'author': 'Mark Rutte',
    'text': 'Onder Ruttes beleid: Nederland grootste netto betaler aan de EU.'
    },
    {'author': 'Mark Rutte',
    'text': 'Onder Ruttes beleid: veel hogere huren.'
    },
    {'author': 'Mark Rutte',
    'text': 'Onder Ruttes beleid: huisprijsstijging van 60% in afgelopen 5 jaar.'
    },
    {'author': 'Mark Rutte',
    'text': 'Onder Ruttes beleid: geen extra bouw van sociale huurwoningen.'
    },
    {'author': 'Mark Rutte',
    'text': 'Onder Ruttes beleid: verhoging zorgverzekeringspremie en eigen bijdrage.'
    },
    {'author': 'Mark Rutte',
    'text': 'VVD corona beleid: varen op PCR testen die niet wetenschappelijk betrouwbaar zijn.'
    },
    {'author': 'Mark Rutte',
    'text': 'Onder Ruttes beleid: schending mensenrechten met invoering ‘Tijdelijke wet beperking vertoeven in de openlucht covid-19’.'
    },
    {'author': 'Mark Rutte',
    'text': 'VVD corona beleid: staatssteun maar voor 30% van het MKB tijdens corona.'
    },
    {'author': 'Mark Rutte',
    'text': 'Onder Ruttes corona beleid: avondklok van tafel door de rechter en met een nieuwe wet komen om de avondklok te continueren.'
    },
    {'author': 'Mark Rutte',
    'text': 'Ruttes campagne: mondvol over "samen" maar verder het beleid van "verdeel en heers" hanteren.'
    },
    {'author': 'Mark Rutte',
    'text': 'Grote bedrijven belasting voordelen geven en burgers meer belastingen laten betalen.'
    },
    {'author': 'Mark Rutte',
    'text': 'Onder Ruttes beleid: mondvol over "samen" maar verder het beleid en de macht centraliseren.'
    },
    {'author': 'Mark Rutte',
    'text': 'Ruttes beloftes vorige verkiezingen niet ingelost: Nederland kreeg niet minder, maar méér Europese Unie. Niet minder, maar méér immigratie. '
    }

  ];



// Show New Quote
function newQuote() {
  // Pick a random quote from array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check if Author field is blank and replace it with 'Unknown'
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }
  // Check Quote length to determine styling
  if (quote.text.length > 90) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  // Set Quote, Hide Loader
  quoteText.textContent = quote.text;
}

// Get Quotes From API
function getQuotes() {
  newQuote();
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText}&hashtags=klaarmetRutte,persconferentie`;
  window.open(twitterUrl, '_blank');
}

// Post Quote
function postQuote() {
  const facebookUrl = `https://www.facebook.com/sharer.php?display=popup&u=`+ window.location.href;
  options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
  window.open(facebookUrl,'sharer',options);
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
facebookBtn.addEventListener('click', postQuote);

// On Load
getQuotes();
