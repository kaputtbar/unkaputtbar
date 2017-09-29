

up vote
96
down vote
accepted
	

fs.lstatSync(path_string).isDirectory() should tell you. From the docs:

{{http://nodejs.org/docs/v0.3.1/api/fs.html#fs.Stats}}

    Objects returned from fs.stat() and fs.lstat() are of this type.

    stats.isFile()
    stats.isDirectory()
    stats.isBlockDevice()
    stats.isCharacterDevice()
    stats.isSymbolicLink() (only valid with fs.lstat())
    stats.isFIFO()
    stats.isSocket()


var list = fs.readdirSync('.');

if (fs.lstatSync(path_string).isDirectory() == true)
{
}

________________________________________________________________________
def all_lower (direntry, list):
	names = os.listdir (direntry)
	for name in names:
		direntry_name = os.path.join (direntry, name)
		# GUARD AGAINST DIRECTORY
		if (os.path.isdir (direntry_name)):
			all_lower (direntry_name, list)
		# ADD TO PICKUP LIST
		list.append ((direntry, name))
________________________________________________________________________

