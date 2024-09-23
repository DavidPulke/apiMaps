

async function searchCountry() {
    const capital = document.getElementById('capitalInput').value.trim(); // קבלת ערך הקלט
    if (capital) { // בדיקה אם הערך אינו ריק
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/capital/${capital}`); // שליחת בקשה ל-API
            let country = response.data[0]; // קבלת המידע הראשון מהתשובה
            if (capital.includes("je")) {
                country = response.data[1];
            }
            if (capital.includes('was')) {
                country = response.data[1];
            }
            const flag = country.flags.svg; // קבלת URL לדגל המדינה
            const name = country.name.common; // קבלת שם המדינה
            const population = country.population.toLocaleString(); // קבלת אוכלוסיית המדינה בפורמט נוח לקריאה
            const region = country.region; // קבלת האזור הגיאוגרפי של המדינה
            const languages = Object.values(country.languages).join(', '); // קבלת רשימת השפות הרשמיות במדינה

            displayResult(flag, name, population, region, languages); // הצגת התוצאות בדף
        } catch (error) {
            console.error(error); // הצגת שגיאה במסוף במקרה של שגיאה
            alert('No country found with this capital'); // הצגת הודעת שגיאה למשתמש
        }
    }
}


function displayResult(flag, name, population, region, languages) {
    const resultDiv = document.getElementById('result'); // איתור האלמנט שבו יוצגו התוצאות
    resultDiv.innerHTML = `
        <img src="${flag}" alt="${name} flag"> 
        <h2>${name}</h2> 
        <p><strong>Population:</strong> ${population}</p>
        <p><strong>Region:</strong> ${region}</p> 
        <p><strong>Languages:</strong> ${languages}</p> 
    `;
}

