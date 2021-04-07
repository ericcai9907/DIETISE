import os

dirpath = "C:\\Users\\eric_\\Documents\\CS 297 Capstone\\dataset256"
filepath = "C:\\Users\\eric_\\Documents\\CS 297 Capstone\\category.txt"
#dirpath = "C:\\Users\\eric_\\Documents\\CS 297 Capstone\\test"

#filepath = "C:\\Users\\eric_\\Documents\\CS 297 Capstone\\testname.txt"
classes = []

def readClasses(srcfile):
	file = open(srcfile, 'r')
	linenum = file.readline()
	for i in range(int(linenum)):
		line = file.readline()
		words = line.split('\t')
		classes.append(words[-1].strip('\n'))

def change_names(srcdir):
	for directory in os.listdir(srcdir):
		dirpath = srcdir+"\\"+directory
		if(os.path.isdir(dirpath)):
			newname = classes[int(directory) - 1]
			src = srcdir+"\\"+directory
			dst = srcdir+"\\"+newname

			os.rename(src,dst)

if __name__ == '__main__':
	readClasses(filepath)
	change_names(dirpath)