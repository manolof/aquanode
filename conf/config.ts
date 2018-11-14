import { Config } from '../src/interfaces';

export const CONFIG: Config = {
	port: 3003,
	pins: {
		white: 18,
		red: 17,
		green: 27,
		blue: 22,
		relay: 1,
	},
	fadeDuration: 1800000,
	temperatureSensorInterval: 60000,
	logFile: 'log.log',
	rgbSpectrum: {
		red: [8, 8, 17, 26, 35, 43, 52, 61, 70, 79, 87, 96, 105, 114, 123, 131, 140, 149, 158, 167, 175, 184, 193, 202, 211, 219, 228, 237, 246, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 249, 249, 248, 247, 247, 246, 246, 245, 245, 244, 243, 243, 242, 242, 241, 240, 240, 239, 239, 238, 237, 237, 236, 236, 235, 235, 234, 233, 233, 232, 232, 231, 230, 230, 229, 229, 228, 228, 227, 226, 226, 225, 225, 224, 223, 223, 222, 222, 221, 220, 220, 219, 219, 218, 218, 217, 216, 216, 215, 215, 214, 213, 213, 212, 212, 211, 211, 210, 209, 209, 208, 208, 207, 206, 206, 205, 205, 204, 203, 203, 202, 202, 201, 201, 200, 199, 199, 198, 198, 197, 196, 196, 195, 195, 194, 193, 193, 192, 192, 191, 191, 190, 189, 189, 188, 188, 187, 186, 186, 185, 185, 184, 184, 183, 182, 182, 181, 181, 180, 179, 179, 178, 178, 177, 176, 176, 175, 175, 174, 174, 173, 172, 172, 171, 171, 170, 169, 169, 168, 168, 167, 167, 166, 165, 165, 164, 164, 163, 162, 162, 161, 161, 160, 159, 159, 158, 158, 157, 157, 156, 155, 155, 154, 154, 153, 152, 152, 151, 151, 150, 150, 149, 148, 147, 146, 145, 144, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131, 130, 129, 128],
		green: [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 6, 8, 10, 13, 15, 17, 19, 21, 23, 26, 28, 30, 32, 34, 36, 39, 41, 43, 45, 47, 49, 52, 54, 56, 58, 60, 62, 65, 67, 69, 71, 73, 75, 78, 80, 82, 84, 86, 88, 91, 93, 95, 97, 99, 101, 104, 106, 108, 110, 112, 114, 117, 119, 121, 123, 125, 128, 128, 130, 132, 135, 137, 140, 142, 145, 147, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 149, 148, 147, 146, 145, 144, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131, 130, 129, 128],
		blue: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 22, 23, 24, 25, 27, 28, 29, 31, 32, 33, 34, 36, 37, 38, 40, 41, 42, 44, 45, 46, 47, 49, 50, 51, 53, 54, 55, 57, 58, 59, 60, 62, 63, 64, 66, 67, 68, 69, 71, 72, 73, 75, 76, 77, 79, 80, 81, 82, 84, 85, 86, 88, 89, 90, 92, 93, 94, 95, 97, 98, 99, 101, 102, 103, 104, 106, 107, 108, 110, 111, 112, 114, 115, 116, 117, 119, 120, 121, 123, 124, 125, 127, 128, 129, 130, 132, 133, 134, 136, 137, 138, 139, 141, 142, 143, 145, 146, 147, 149, 150, 151, 152, 154, 155, 156, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 171, 172, 173, 174, 176, 177, 178, 180, 181, 182, 184, 185, 186, 187, 189, 190, 191, 193, 194, 195, 197, 198, 199, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200]
	},
};

const arr = [
	[8, 1, 20],
	[8, 1, 20],
	[17, 2, 20],
	[26, 2, 20],
	[35, 2, 20],
	[43, 2, 20],
	[52, 2, 20],
	[61, 2, 20],
	[70, 2, 20],
	[79, 2, 20],
	[87, 2, 20],
	[96, 2, 20],
	[105, 2, 20],
	[114, 2, 20],
	[123, 2, 20],
	[131, 2, 20],
	[140, 2, 20],
	[149, 2, 20],
	[158, 2, 20],
	[167, 2, 20],
	[175, 2, 20],
	[184, 2, 20],
	[193, 2, 20],
	[202, 2, 20],
	[211, 2, 20],
	[219, 2, 20],
	[228, 2, 20],
	[237, 2, 20],
	[246, 2, 20],
	[250, 2, 20],
	[250, 2, 20],
	[250, 2, 20],
	[250, 4, 20],
	[250, 6, 20],
	[250, 8, 20],
	[250, 10, 20],
	[250, 13, 20],
	[250, 15, 20],
	[250, 17, 20],
	[250, 19, 20],
	[250, 21, 20],
	[250, 23, 20],
	[250, 26, 20],
	[250, 28, 20],
	[250, 30, 20],
	[250, 32, 20],
	[250, 34, 20],
	[250, 36, 20],
	[250, 39, 20],
	[250, 41, 20],
	[250, 43, 20],
	[250, 45, 20],
	[250, 47, 20],
	[250, 49, 20],
	[250, 52, 20],
	[250, 54, 20],
	[250, 56, 20],
	[250, 58, 20],
	[250, 60, 20],
	[250, 62, 20],
	[250, 65, 20],
	[250, 67, 20],
	[250, 69, 20],
	[250, 71, 20],
	[250, 73, 20],
	[250, 75, 20],
	[250, 78, 20],
	[250, 80, 20],
	[250, 82, 20],
	[250, 84, 20],
	[250, 86, 20],
	[250, 88, 20],
	[250, 91, 20],
	[250, 93, 20],
	[250, 95, 20],
	[250, 97, 20],
	[250, 99, 20],
	[250, 101, 20],
	[250, 104, 20],
	[250, 106, 20],
	[250, 108, 20],
	[250, 110, 20],
	[250, 112, 20],
	[250, 114, 20],
	[250, 117, 20],
	[250, 119, 20],
	[250, 121, 20],
	[250, 123, 20],
	[250, 125, 20],
	[250, 128, 20],
	[250, 128, 20],
	[250, 130, 20],
	[250, 132, 20],
	[250, 135, 20],
	[250, 137, 20],
	[250, 140, 20],
	[250, 142, 20],
	[250, 145, 20],
	[250, 147, 20],
	[250, 150, 20],
	[250, 150, 20],
	[250, 150, 20],
	[250, 150, 20],
	[250, 150, 20],
	[250, 150, 20],
	[250, 150, 20],
	[250, 150, 20],
	[250, 150, 20],
	[249, 150, 20],
	[249, 150, 20],
	[248, 150, 20],
	[247, 150, 20],
	[247, 150, 20],
	[246, 150, 20],
	[246, 150, 20],
	[245, 150, 20],
	[245, 150, 22],
	[244, 150, 23],
	[243, 150, 24],
	[243, 150, 25],
	[242, 150, 27],
	[242, 150, 28],
	[241, 150, 29],
	[240, 150, 31],
	[240, 150, 32],
	[239, 150, 33],
	[239, 150, 34],
	[238, 150, 36],
	[237, 150, 37],
	[237, 150, 38],
	[236, 150, 40],
	[236, 150, 41],
	[235, 150, 42],
	[235, 150, 44],
	[234, 150, 45],
	[233, 150, 46],
	[233, 150, 47],
	[232, 150, 49],
	[232, 150, 50],
	[231, 150, 51],
	[230, 150, 53],
	[230, 150, 54],
	[229, 150, 55],
	[229, 150, 57],
	[228, 150, 58],
	[228, 150, 59],
	[227, 150, 60],
	[226, 150, 62],
	[226, 150, 63],
	[225, 150, 64],
	[225, 150, 66],
	[224, 150, 67],
	[223, 150, 68],
	[223, 150, 69],
	[222, 150, 71],
	[222, 150, 72],
	[221, 150, 73],
	[220, 150, 75],
	[220, 150, 76],
	[219, 150, 77],
	[219, 150, 79],
	[218, 150, 80],
	[218, 150, 81],
	[217, 150, 82],
	[216, 150, 84],
	[216, 150, 85],
	[215, 150, 86],
	[215, 150, 88],
	[214, 150, 89],
	[213, 150, 90],
	[213, 150, 92],
	[212, 150, 93],
	[212, 150, 94],
	[211, 150, 95],
	[211, 150, 97],
	[210, 150, 98],
	[209, 150, 99],
	[209, 150, 101],
	[208, 150, 102],
	[208, 150, 103],
	[207, 150, 104],
	[206, 150, 106],
	[206, 150, 107],
	[205, 150, 108],
	[205, 150, 110],
	[204, 150, 111],
	[203, 150, 112],
	[203, 150, 114],
	[202, 150, 115],
	[202, 150, 116],
	[201, 150, 117],
	[201, 150, 119],
	[200, 150, 120],
	[199, 150, 121],
	[199, 150, 123],
	[198, 150, 124],
	[198, 150, 125],
	[197, 150, 127],
	[196, 150, 128],
	[196, 150, 129],
	[195, 150, 130],
	[195, 150, 132],
	[194, 150, 133],
	[193, 150, 134],
	[193, 150, 136],
	[192, 150, 137],
	[192, 150, 138],
	[191, 150, 139],
	[191, 150, 141],
	[190, 150, 142],
	[189, 150, 143],
	[189, 150, 145],
	[188, 150, 146],
	[188, 150, 147],
	[187, 150, 149],
	[186, 150, 150],
	[186, 150, 151],
	[185, 150, 152],
	[185, 150, 154],
	[184, 150, 155],
	[184, 150, 156],
	[183, 150, 158],
	[182, 150, 159],
	[182, 150, 160],
	[181, 150, 162],
	[181, 150, 163],
	[180, 150, 164],
	[179, 150, 165],
	[179, 150, 167],
	[178, 150, 168],
	[178, 150, 169],
	[177, 150, 171],
	[176, 150, 172],
	[176, 150, 173],
	[175, 150, 174],
	[175, 150, 176],
	[174, 150, 177],
	[174, 150, 178],
	[173, 150, 180],
	[172, 150, 181],
	[172, 150, 182],
	[171, 150, 184],
	[171, 150, 185],
	[170, 150, 186],
	[169, 150, 187],
	[169, 150, 189],
	[168, 150, 190],
	[168, 150, 191],
	[167, 150, 193],
	[167, 150, 194],
	[166, 150, 195],
	[165, 150, 197],
	[165, 150, 198],
	[164, 150, 199],
	[164, 150, 200],
	[163, 150, 200],
	[162, 150, 200],
	[162, 150, 200],
	[161, 150, 200],
	[161, 150, 200],
	[160, 150, 200],
	[159, 150, 200],
	[159, 150, 200],
	[158, 150, 200],
	[158, 150, 200],
	[157, 150, 200],
	[157, 150, 200],
	[156, 150, 200],
	[155, 150, 200],
	[155, 150, 200],
	[154, 150, 200],
	[154, 150, 200],
	[153, 150, 200],
	[152, 150, 200],
	[152, 150, 200],
	[151, 150, 200],
	[151, 150, 200],
	[150, 150, 200],
	[150, 150, 200],
	[149, 149, 200],
	[148, 148, 200],
	[147, 147, 200],
	[146, 146, 200],
	[145, 145, 200],
	[144, 144, 200],
	[142, 142, 200],
	[141, 141, 200],
	[140, 140, 200],
	[139, 139, 200],
	[138, 138, 200],
	[137, 137, 200],
	[136, 136, 200],
	[135, 135, 200],
	[134, 134, 200],
	[133, 133, 200],
	[132, 132, 200],
	[131, 131, 200],
	[130, 130, 200],
	[129, 129, 200],
	[128, 128, 200],
];
