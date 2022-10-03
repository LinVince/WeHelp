#add requests
import requests
import re
from bs4 import BeautifulSoup
import json
import csv


response = requests.get("https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json")
#soup = BeautifulSoup(response.text, "html.parser")
text = json.loads(response.text)
list_compile = []
for i in text['result']['results']:
  resort_list = []
  if int(i['xpostDate'][0:4]) >= 2015:
    resort_list.append(i['stitle'])
    resort_list.append(i['address'][4:8])
    resort_list.append(i['longitude'])
    resort_list.append(i['latitude'])
    resort_list.append('https'+ i['file'].split('https')[1])
    list_compile.append(resort_list)

with open('resorts.csv', 'w', newline='') as csvfile:
  writer = csv.writer(csvfile)
  writer.writerow(['景點','行政區','經度','緯度','圖片'])
  for i in list_compile:
    writer.writerow(i)
  
 
