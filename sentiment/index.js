const express = require('express');
const natural = require('natural');
const app = express();
const port = 3050;

app.use(express.json());

app.post('/sentiment', (req, res) => {
    const { sentence } = req.body;

    if (!sentence) {
        return res.status(400).json({ error: 'Sentence is required' });
    }

    const analyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');
    const tokenizer = new natural.WordTokenizer();
    const tokenizedSentence = tokenizer.tokenize(sentence);

    const analysisResult = analyzer.getSentiment(tokenizedSentence);

    let sentimentText;

    if (analysisResult < 0) {
        sentimentText = 'negative';
    } else if (analysisResult > 0) {
        sentimentText = 'positive';
    } else {
        sentimentText = 'neutral';
    }

    res.json({
        sentimentScore: analysisResult,
        sentiment: sentimentText
    });
});

app.listen(port, () => {
    console.log(`Sentiment analysis service listening at http://localhost:${port}`);
});