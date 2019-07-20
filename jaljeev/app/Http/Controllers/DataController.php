<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User_M;
use App\Farmer;
use App\Products;
use App\Product_Mapper;
use DB;

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

        if($request->type=='Farmer')
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
        
    }
    
    public function login_user(Request $request)
    {
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

    
}
