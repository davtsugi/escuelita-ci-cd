docker run -it -p 9090:9090 -w /home/api -v %cd%:/home/api mcr.microsoft.com/dotnet/core/sdk:2.1 /bin/bash