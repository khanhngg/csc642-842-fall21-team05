import os
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

os.environ['PATH'] += r"C:/seleniumDriver"

# create a new instance of the Chrome driver
driver = webdriver.Chrome()

# go to website on Chrome browser
driver.get("https://khanhngg.github.io/csc642-842-fall21-team05/dashboard")

# search the car whose make is Toyota
driver.implicitly_wait(3)
my_element = driver.find_element_by_id('searchmake')
my_element.send_keys('Toyota')

# search the car whose id is 1
driver.implicitly_wait(3)
my_element = driver.find_element_by_id('searchId')
my_element.send_keys(1)

# navigate to addform page
driver.implicitly_wait(3)
my_element = driver.find_element_by_id('addButton')
my_element.click()
