# first argument is the file to convert, script stops if none provided
# second argument is the output file; defaults to "output.svg"

set -e

if [ $# -lt 1 ]; then
  echo "bash convert.sh diagram.mmd [output.svg]"
  exit 1
fi

GID=`getent group $UID | awk -F":" '{print$3}'`
docker run --rm -u $UID:$GID -v $(dirname `realpath $1`)/diagrams:/data minlag/mermaid-cli -i /data/$1 -o /data/${2:-output.svg}
