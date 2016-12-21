forfiles /p %1 /m *.JPG /c "cmd /c gm convert @path -resize 1000 +profile * @path"
forfiles /p %1 /m *.PNG /c "cmd /c gm convert @path -resize 1000 +profile * @path"