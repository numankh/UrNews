import json
import os
from newsapi import NewsApiClient


def get_finance_news(event, context):

    newsapi = NewsApiClient(api_key = os.environ.get('NEWS_API_KEY'))

    all_articles = newsapi.get_everything(q='finance',
                                          sources='bbc-news,bloomberg,business-insider',
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


def get_health_news(event, context):

    newsapi = NewsApiClient(api_key = os.environ.get('NEWS_API_KEY'))

    all_articles = newsapi.get_everything(q='health care',
                                          sources='abc-news,cnn,fox-news,google-news',
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

def get_tech_news(event, context):

    newsapi = NewsApiClient(api_key = os.environ.get('NEWS_API_KEY'))

    all_articles = newsapi.get_everything(q='tech',
                                          sources='techcrunch,hacker-news,crypto-coins-news,bloomberg',
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

def get_housing_news(event, context):

    newsapi = NewsApiClient(api_key = os.environ.get('NEWS_API_KEY'))

    all_articles = newsapi.get_everything(q='real estate investment',
                                          sources='abc-news,cnn,fox-news,google-news',
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

def get_energy_news(event, context):

    newsapi = NewsApiClient(api_key = os.environ.get('NEWS_API_KEY'))

    all_articles = newsapi.get_everything(q='oil',
                                          sources='bbc-news,abc-news,cnn,fox-news',
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

def get_comm_news(event, context):

    newsapi = NewsApiClient(api_key = os.environ.get('NEWS_API_KEY'))

    all_articles = newsapi.get_everything(q='communication service',
                                          sources='bbc-news,abc-news,cnn,fox-news',
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