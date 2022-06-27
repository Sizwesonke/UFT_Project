'******************************************
'Open browser and navigate to checkers website
'*******************************************

Call LaunchBrowser("Chrome","https://www.checkers.co.za/")
 @@ script infofile_;_ZIP::ssf4.xml_;_
 '******************************************
'Search a store near me
'*******************************************
Call SearchStore()

'SystemUtil.CloseProcessByName("iexplore.exe")
