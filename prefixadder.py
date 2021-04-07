import os

path = "C:\\Users\\eric_\\Documents\\CS 297 Capstone\\MAFood121\\images"

def add_prefix(strprefix, srcdir):
	for filename in os.listdir(srcdir):
		newname = strprefix+filename
		src = srcdir+"\\"+filename
		dst = srcdir+"\\"+newname

		os.rename(src,dst)

def directoryIter(srcdirectory):
	for directory in os.listdir(srcdirectory):
		print(directory)
		dirpath = path+"\\"+directory
		#print(os.path.isdir(path+"\\"+directory))
		if os.path.isdir(dirpath):			
			add_prefix("mafood", dirpath)


if __name__ == '__main__':
	directoryIter(path)


