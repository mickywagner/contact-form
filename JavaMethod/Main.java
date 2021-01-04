public class Main {
    
    static String formatPhoneNumber(String phoneNumber) { 
        if(String.valueOf(phoneNumber) == null) 
             return "Null value cannot be formatted";
    
        if(phoneNumber.length() != 10) 
            return "Phone number length does not meet required 10 digits";

        String formattedPhoneNumber = "(" + phoneNumber.substring(0,3) + 
        ") " + phoneNumber.substring(3, 6) + "-" + phoneNumber.substring(6,10);

        return formattedPhoneNumber;
    }

    public static void main(String[] args) {
        String format = formatPhoneNumber("2132589786");
        System.out.println(format);
    }
     
}