from newsapi import NewsApiClient
import creds

# Init
newsapi = NewsApiClient(api_key=creds.News_API_Key)

# /v2/top-headlines
top_headlines = newsapi.get_everything(q='Covid-19',
                                          sources='bbc-news,cnn')

# # /v2/everything
# all_articles = newsapi.get_everything(q='bitcoin',
#                                       sources='bbc-news,the-verge',
#                                       domains='bbc.co.uk,techcrunch.com',
#                                       from_param='2017-12-01',
#                                       to='2017-12-12',
#                                       language='en',
#                                       sort_by='relevancy',
#                                       page=2)

# /v2/sources
# sources = newsapi.get_sources()

print(top_headlines)
