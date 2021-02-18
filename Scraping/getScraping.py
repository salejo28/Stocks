import requests
from bs4 import BeautifulSoup
import os
from dotenv import load_dotenv

load_dotenv()

def GetLastValue():
    req = requests.get(os.getenv('URL_SCRAPING'))
    soup = BeautifulSoup(req.content, 'html.parser')

    tbody = soup.find(id=os.getenv('TBODY_ID'))

    tr = tbody.find_all('tr', class_=os.getenv('TR_CLASS'))

    stocks = []

    for i, tr in enumerate(tr):
        stocks_name = tr.find('a')
        final_value = tr.find('span', id="viewns_Z7_8162H3G0K8RBE0AS52COFE0UA7_:ns_Z7_8162H3G0K8RBE0AS52COFE0UA7_j_id30730717_1d4e8f6:" +
                              str(i)+":ns_Z7_8162H3G0K8RBE0AS52COFE0UA7_j_id30730717_1d4ebe1")

        array = {
            'name': stocks_name.text.strip(),
            'last_value': final_value.text.strip()
        }

        stocks.append(array)

    return stocks