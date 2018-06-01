set proxy=http://proxy.marconi.loc:8080
set PROXY=http://proxy.marconi.loc:8080 
set http_proxy	=http://proxy.marconi.loc:8080
set HTTP_PROXY=http://proxy.marconi.loc:8080
set HTTPS_PROXY=http://proxy.marconi.loc:8080
set https_proxy=http://proxy.marconi.loc:8080
call npm config set loglevel info
call npm config set proxy http://proxy.marconi.loc:8080
call npm config set http-proxy http://proxy.marconi.loc:8080
call npm config set https-proxy http://proxy.marconi.loc:8080

call npm config set registry http://registry.npmjs.org
call npm config set strict-ssl false

set PYTHONPATH=c:\python27
call npm config set python C:\Python27\python.exe
call npm config --global set prefix "C:\Lavoro-Temp\npm-data"
call npm config --global set cache "C:\Lavoro-Temp\npm-cache"

call git config --global http.proxy http://proxy.marconi.loc:8080
rem call npm install -g @angular/cli@latest
call npm install 

pause
