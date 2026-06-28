exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      explanation: "AI test success"
    })
  };
};