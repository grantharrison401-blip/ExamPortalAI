exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || "{}");

    const question = body.question || "";
    const answer = body.answer || "";

    const apiKey = process.env.GEMINI_API_KEY;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          contents:[{
            parts:[{
              text:`বাংলায় ব্যাখ্যা করো:

প্রশ্ন: ${question}

সঠিক উত্তর: ${answer}

১. কেন এটা সঠিক
২. ছোট explanation
৩. মনে রাখার টিপস`
            }]
          }]
        })
      }
    );

    const data = await response.json();

    return {
      statusCode:200,
      body:JSON.stringify({
        explanation:
          data.candidates?.[0]?.content?.parts?.[0]?.text ||
          "ব্যাখ্যা পাওয়া যায়নি"
      })
    };

  } catch(err){
    return {
      statusCode:500,
      body:JSON.stringify({
        explanation:"AI error"
      })
    };
  }
};