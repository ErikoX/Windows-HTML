echo "Starting Website..."

git pull origin master

echo ""
echo "---------------------------------"
echo "Pulled newest version from github"
echo "Great day!"
echo "---------------------------------"
echo ""

php -S 0.0.0.0:8000 -t .