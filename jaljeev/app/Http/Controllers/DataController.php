<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\User_M;
use App\Farmer;
use App\Products;
use App\Product_Mapper;
use App\Transaction;
use App\FishTransaction;
use DB;
use Carbon\Carbon;
class DataController extends Controller
{
    
    public function user_insert(Request $request)
    {
        $new=new User_M;
        $new->name=$request->name;
        $new->contact=$request->contact;
        $new->location=$request->location;
        $new->type=$request->type;
        $new->password=$request->password;
        $new->save();
       /* if($request->type=='Farmer')
        {
            $farm=new Farmer;
            $farm->area=-1;
            $farm->depth=-1;
            $farm->ph=-1;
            $farm->f_user_id=$new->user_id;
            $farm->save();
        }
        return response()->json([
            'user_id' => $new->user_id,
        ]);
        
    }*/
}
    public function login_user(Request $request) {
        $name=$request->name;
        $pass=$request->password;
        $user=(User_M::where('name',$name)->get())[0];
        if(count($user)>0)
        {
            if($pass==$user->password)
            {
                return response()->json([
                    'message' => 0,
                    'userid'=> $user->user_id,
                    'location'=> $user->location
                ]);
            }
            else
            {
                return response()->json([
                    'message' => 1,
                    'userid'=> $user->user_id,
                    'location'=> $user->location
                ]);
            }
        }
        else
        {
            return response()->json([
                'message' => 2,
            ]);
        }
    }
    public function add_product(Request $request)
    {
        $productname=$request->name;
        $vendorid=$request->user_id;
        $quant=$request->quantity;
        $pr=$request->price;
        $productid=((Products::where('product_name',$productname)->get())[0])->product_id;
        $pmap=new Product_Mapper;
        $pmap->vendor_id=$vendorid;
        $pmap->product_id=$productid;
        $pmap->quantity=$quant;
        $pmap->price=$pr;
        $pmap->save();
    }
    public function test()
    {
        
        /*
        return $_GET['location'];
        $vendors =DB::table('product__mappers')
                ->join('user__m_s', 'user__m_s.user_id', '=', 'product__mappers.vendor_id')
                ->join('products', 'products.product_id', '=', 'product__mappers.product_id')
                ->where('product__mappers.vendor_id','=',$_GET['location'])
                ->select('user__m_s.name','products.product_name','product__mappers.quantity','product__mappers.price')
                ->get();
        return $vendors;
        */
        $farmers =DB::table('fish_mappers')
                ->join('user__m_s', 'user__m_s.user_id', '=', 'fish_mappers.farmer_id')
                ->join('fish', 'fish.fish_id', '=', 'fish_mappers.fish_id')
                ->where([['user__m_s.type','=',"Farmer"],['user__m_s.location','=',$_GET['location']]])
                ->select('user__m_s.contact','user__m_s.location','fish.fish_id','user__m_s.user_id','user__m_s.name','fish.fish_name','fish_mappers.quantity','fish_mappers.price')
                ->get();
                return response()->json([
                    'vendors' => $farmers
                ]);
        /*

        $productid=((Products::where('product_name',"Seed")->get())[0])->product_id;
        return $productid;
        */

        return Carbon::today()->toDateString();
    }
    public function returnorder (Request $request)
    {
        $vendors =DB::table('product__mappers')
                ->join('user__m_s', 'user__m_s.user_id', '=', 'product__mappers.vendor_id')
                ->join('products', 'products.product_id', '=', 'product__mappers.product_id')
                ->where([['user__m_s.type','=',"Vendor"],['user__m_s.location','=',$_GET['location']]])
                ->select('user__m_s.contact','user__m_s.location','products.product_id','user__m_s.user_id','user__m_s.name','products.product_name','product__mappers.quantity','product__mappers.price')
                ->get();
                return response()->json([
                    'vendors' => $vendors
                ]);
    }
    public function fishorder (Request $request)
    {
        $farmers =DB::table('fish_mappers')
                ->join('user__m_s', 'user__m_s.user_id', '=', 'fish_mappers.farmer_id')
                ->join('fish', 'fish.fish_id', '=', 'fish_mappers.fish_id')
                ->where([['user__m_s.type','=',"Farmer"],['user__m_s.location','=',$_GET['location']]])
                ->select('user__m_s.contact','user__m_s.location','fish.fish_id','user__m_s.user_id','user__m_s.name','fish.fish_name','fish_mappers.quantity','fish_mappers.price')
                ->get();
                return response()->json([
                    'vendors' => $farmers
                ]);
    }

    public function trasaction_pending(Request $request)
    {
        $tot1=(Product_Mapper::where([['farmer_id','=',$request->vendorid],['fish_id','=',$request->productid]])->get())[0];
        $new=new Transaction;
        $new->vendor_id=$request->vendorid;
        $new->farmer_id=$request->farmerid;
        $new->product_id=$request->productid;
        $new->quantity=$request->quantity;
        $new->status="Pending";
        $new->sales=$new->quantity*$tot1->price;
        $new->save();
    }

    public function transaction_active(Request $request)
    {
        $tot=(Transaction::where([['vendor_id','=',$request->vendorid],['farmer_id','=',$request->farmerid],['product_id','=',$request->productid],['quantity','=',$request->quantity]])->get())[0];
        $tot1=(Product_Mapper::where([['vendor_id','=',$request->vendorid],['product_id','=',$request->productid]])->get())[0];
        $tot1->quantity=$tot1->quantity-$tot->quantity;
        $tot->status="Done";
        $tot->save();
    }

    public function fish_trasaction_pending(Request $request)
    {
        $tot1=(Fish_Mapper::where([['farmer_id','=',$request->farmerid],['fish_id','=',$request->fishid]])->get())[0];
        $new=new FishTransaction;
        $new->buyer_id=$request->buyerid;
        $new->farmer_id=$request->farmerid;
        $new->fish_id=$request->fishid;
        $new->quantity=$request->quantity;
        $new->status="Pending";
        $new->sales=$new->quantity*$tot1->price;
        $new->save();
    }

    public function fish_transaction_active(Request $request)
    {
        $tot=(FishTransaction::where([['buyer_id','=',$request->buyerid],['farmer_id','=',$request->farmerid],['fish_id','=',$request->fishid],['quantity','=',$request->quantity]])->get())[0];
        $tot1=(Fish_Mapper::where([['farmer_id','=',$request->farmerid],['fish_id','=',$request->fishid]])->get())[0];
        $tot1->quantity=$tot1->quantity-$tot->quantity;
        $tot->status="Done";
        $tot->save();
    }

    public function tutorial(Request $request){
        $cate=$request->category;
        $loc=$request->location;
        $user=$request->user_id;
        $desc=$request->description;
        $sub=substr($_GET['URL'],-11,-1);
        $subs="https://www.youtube.com/watch?v=".$sub;

        $tut=new VideoTutorials;
        $tut->category=$cate;
        $tut->location=$loc;
        $tut->user_id=$user;
        $tut->description=$desc;
        $tut->URL=$subs;

        $tut->save();

        return response()->json([
            'URL' => $subs
        ]);
    }
    
    public function allurl(){
        $urls=video_tutorials::select('URL')->get();

        return response()->json([
            'URL' => $urls
        ]);
    }
    public function add_farm(Request $request)
    {
        $new=new Farmer;
        $new->f_user_id=$request->userid;
        $new->area=$request->area;
        $new->depth=$request->depth;
        $new->ph=$request->ph;
        $new->quantity=$request->quantity;
        $new->date_h=Carbon::today()->toDateString();
        $new->save();
    }

    public function pending(){
        $farmers =DB::table('transactions')
                ->join('user__m_s', 'user__m_s.user_id', '=', 'transactions.farmer_id')
                ->join('products', 'products.product_id', '=', 'transactions.product_id')
                ->where([['transactions.vendor_id','=',4]])
                ->get();
                return response()->json([
                    'vendors' => $farmers
                ]);
    }

}

