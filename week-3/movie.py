#add requests
import requests
import re
from bs4 import BeautifulSoup
import json
import csv

pagenum = 9500
cat = ['[好雷]','[普雷]','[負雷]']
sup = []
nom = []
min = []
def extract(pagenum):
  response = requests.get("https://www.ptt.cc/bbs/movie/index" + str(pagenum) + ".html")
  soup = BeautifulSoup(response.text, "html.parser")
  p_list = soup.find_all('a', href=True)
  for i in p_list:
    #print (i)
    if i.getText()[0:4] in cat and i.getText() != 'None':
      return i.getText()

for i in range(10):
  if (extract(pagenum)) != None:
    if extract(pagenum)[0:4] == '[好雷]':
      sup.append(extract(pagenum))
    elif extract(pagenum)[0:4] == '[普雷]':
      nom.append(extract(pagenum))
    elif extract(pagenum)[0:4] == '[負雷]':
      min.append(extract(pagenum))    
  pagenum -= 1

with open('movie.txt','x') as output:
  for i in sup:
    output.write(i + '\n')
  for i in nom:
    output.write(i + '\n')
  for i in min:
    output.write(i + '\n') 
