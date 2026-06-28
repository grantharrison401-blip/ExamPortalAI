exports.handler = async (event) => {
  try {
    let data = {};

    if (event.body) {
      data = JSON.parse(event.body);
    }

    const question = data.question || "";
    const answer = data.answer || "";

    return {
      statusCode: 200,
      body: JSON.stringify({
        explanation: `প্রশ্ন: ${question}
উত্তর: ${answer}
এটি AI explanation test`
      })
    };

  } catch (err) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        explanation: "AI explanation failed"
      })
    };
  }
};