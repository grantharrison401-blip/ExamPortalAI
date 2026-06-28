exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    const question = data.question || "";
    const answer = data.answer || "";

    return {
      statusCode: 200,
      body: JSON.stringify({
        explanation: `AI test: ${question}`
      })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message
      })
    };
  }
};