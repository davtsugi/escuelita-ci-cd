export class Utils {
    static IsValidString(value: string) {
        console.log("value:", value);
        return (value && value.length > 0);
    }
}