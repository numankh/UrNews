import json
import os
from newsapi import NewsApiClient


def get_finance_news(event, context):

    newsapi = NewsApiClient(api_key = os.environ.get('NEWS_API_KEY'))

    all_articles = newsapi.get_everything(q='finance',
                                          sources='business-insider',
                                          from_param='2020-03-12',
                                          to='2020-03-21',
                                          language='en')

    response = {
        "statusCode": 200,
        "headers": {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": True
        },
        "body": json.dumps(all_articles["articles"])
    }

    return response